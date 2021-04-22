/**
 * WordPress dependencies
 */

import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Control for letter-spacing.
 *
 * @param  {Object}   props                 Component props.
 * @param  {string}   props.value           Currently selected letter-spacing.
 * @param  {Function} props.onChange        Handles change in letter-spacing selection.
 * @return {WPElement}    Letter-spacing edit element.
 */
export default function LetterSpacingControl( { value, onChange } ) {
	return (
		<fieldset className="block-editor-letter-spacing-control">
			<SelectControl
				value={ value }
				label={ __( 'Letter Spacing' ) }
				options={ [
					{ value: '10px', label: __( '10px' ) },
					{ value: '9px', label: __( '9px' )  },
					{ value: '8px', label: __( '8px' ) },
					{ value: '7px', label: __( '7px' ) },
					{ value: 'normal', label: __( 'Normal' ) },
				] }
				onChange={ onChange }
			/>
		</fieldset>
	);
}


/*
Left overs from using the range control, just in case I want to switch back...
import { RangeControl } from '@wordpress/components';
const MIN_LETTER_SPACING_VALUE = -3;
const MAX_LETTER_SPACING_VALUE = 10;
	<RangeControl
		value={value}
		label={__('Letter Spacing')}
		min={MIN_LETTER_SPACING_VALUE}
		max={MAX_LETTER_SPACING_VALUE}
		initialPosition={1}
		allowReset={true}
		resetFallbackValue={1}
		onChange={onChange}
	/>
*/
