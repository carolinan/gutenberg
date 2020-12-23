/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useCallback } from '@wordpress/element';
/**
 * External dependencies
 */
import { contextConnect, useContextSystem } from '@wp-g2/context';
import { noop } from '@wp-g2/utils';
import {
	Grid,
	TextInput,
	SelectDropdown,
	FormGroup,
	Button,
	View,
} from '@wp-g2/components';

/**
 * Internal dependencies
 */
import { getSelectTemplateColumns } from './font-size-control-utils';

function FontSizeControlSelect( props, forwardedRef ) {
	const {
		customLabel,
		disabled,
		inputValue,
		isDefaultValue,
		label,
		max,
		min,
		onChange = noop,
		onInputChange = noop,
		onReset = noop,
		options = [],
		size,
		value,
		withNumberInput,
		withSelect,
		...otherProps
	} = useContextSystem( props, 'FontSizeControlSelect' );

	const templateColumns = getSelectTemplateColumns( withNumberInput );
	const subControlsTemplateColumns = withNumberInput ? '1fr 1fr' : '1fr';

	const renderItem = useCallback(
		( { name, style } ) => <span style={ style }>{ name }</span>,
		[]
	);

	return (
		<Grid alignment="bottom" templateColumns={ templateColumns }>
			{ withSelect && (
				<FormGroup label={ label }>
					<SelectDropdown
						disabled={ disabled }
						max={ 260 }
						onChange={ onChange }
						options={ options }
						ref={ forwardedRef }
						renderItem={ renderItem }
						size={ size }
						value={ value }
						{ ...otherProps }
					/>
				</FormGroup>
			) }
			<Grid
				alignment="bottom"
				templateColumns={ subControlsTemplateColumns }
			>
				{ withNumberInput && (
					<FormGroup label={ customLabel }>
						<TextInput
							disabled={ disabled }
							max={ max }
							min={ min }
							onChange={ onInputChange }
							size={ size }
							type="number"
							value={ inputValue }
						/>
					</FormGroup>
				) }
				<View>
					<Button
						disabled={ isDefaultValue }
						isBlock
						onClick={ onReset }
					>
						{ __( 'Reset' ) }
					</Button>
				</View>
			</Grid>
		</Grid>
	);
}

export default contextConnect( FontSizeControlSelect, 'FontSizeControlSelect' );
