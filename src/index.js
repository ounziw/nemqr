import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { RangeControl } from '@wordpress/components';

import { InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

registerBlockType( 'nemqr/nemqr', {
    title: 'NEM QR Code',
    icon: 'tickets-alt',
    category: 'common',
    attributes: {
        content: {
            type: 'string',
            source: 'attribute',
            selector: 'div',
            attribute: 'data-addr'
        },
        xem: {
            type: 'string',
            default: 50,
            source: 'attribute',
            selector: 'div',
            attribute: 'data-amount'
        },
        imgsize: {
            type: 'string',
            default: 200,
            source: 'attribute',
            selector: 'div',
            attribute: 'data-imgsize'
        },
    },
    edit: ( props ) => {
        const {
            className,
            attributes: {
                content,
                xem,
                imgsize,
            },
            setAttributes,
        } = props;
        return (
            <>
            <InspectorControls>
            <PanelBody
        title={ __( 'Image size', 'nemqr' ) }
    >
    <RangeControl
        label={__('Image size (100 -300)','nemqr')}
        onChange={(number)=>{setAttributes({imgsize:number})}}
        value={parseInt(imgsize)}
        min={100}
        max={300}
        step={5}
            ></RangeControl>
            </PanelBody>
            </InspectorControls>
            <TextControl
        value={ content }
        label={ __(
            'Nem Address',
            'nemqr'
    ) }
        onChange={(newText)=>setAttributes({content: newText})}
    ></TextControl>
        <RangeControl
        label={__('xem amount (0.1 -100)','nemqr')}
        onChange={(number)=>{setAttributes({xem:number})}}
        value={parseFloat(xem)}
        min={0.1}
        max={100}
        step={0.1}
            ></RangeControl>
            </>
    );
    },
    save: ( props ) => {
        const {
            className,
            attributes: {
                content,
                xem,
                imgsize,
            },
        } = props;
        return (<><div className='nemqrcode' data-addr={ content } data-amount={ xem } data-imgsize={ imgsize }></div></>);
    },
} );
