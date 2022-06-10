import Image from "next/image"
import { useState, useRef } from "react";
import _ from 'lodash';

export default function SignatureDisplay(props) {
    console.log('props: ', props);
    const { name, designation, email, phone, website, imgSrc, imgAlt } = props.signature;
    const [errorMessage, setError] = useState(null);
    const [imgHeight, setImgHeight] = useState(100);
    const [copiedToClipboard, showCopied] = useState(false);
    const signatureRef = useRef();
    const imgRef = useRef();

    const onChanges = (event) => {
        console.log('event: ', event);
        console.log('event: ', event.target.value);
        const inputValue = event.target.value;
        if (inputValue[0] == 0) {
            setError('Cannot Start with 0')
            setImgHeight(100);
        } else {
            setImgHeight(inputValue);
        }
    }

    const download = () => {
        const element = document.createElement('a');
        const htmlFile = new Blob([signatureRef.current.innerHTML], { type: 'text/html' })
        element.href = URL.createObjectURL(htmlFile);
        element.download = name + '-' + designation + '.html'
        element.click();
    }

    const copyText = () => {
        const


            height = imgRef.current.clientHeight,
            width = imgRef.current.clientWidth;

        imgRef.current.width = width;
        imgRef.current.height = height;
        const
            blob = new Blob([signatureRef.current.innerHTML], { type: 'text/html' }),
            richInput = new ClipboardItem({ 'text/html': blob });

        console.log('width: ', width);
        console.log('height: ', height);
        navigator.clipboard.write([richInput]).then(() => {
            showCopied(true);
        }).catch(error => {
            console.error('error: ', error.message);
            showCopied(true);
        })
    }

    return (

        <section>
            <style jsx>{`
                h5{
                    margin: 0;
                }
                .button-container{
                    display: flex;
                }
                .button-container button {
                    margin-right: 10px;
                }
                
            `}
            </style>
            <label>Img Height <span>(Pixels)</span></label>
            <input onChange={onChanges} name="imgHeight" type="number" value={imgHeight}></input>
            {(() => {
                if (_.isNull(errorMessage)) {
                    return <span />
                } else {
                    <small>{errorMessage}</small>
                }
            })()}


            <hr></hr>
            <small style={{ opacity: '0.4' }}>Signature Preview:</small>
            <div ref={signatureRef}>
                <div>{name}</div>
                <div style={{ fontSize: '1.2em', lineHeight: 'normal' }}>{designation}</div>
                <div><strong>(e)</strong> {email}</div>
                <div><strong>(c)</strong> {phone}</div>

                <div style={{ height: imgHeight + 'px' }}>
                    <img ref={imgRef} src={imgSrc} alt={imgAlt} className="default-img" />
                </div>
                <div>
                    <a  rel="noreferrer"  href={"http://" + website} target="_blank">{website}</a>
                </div>
            </div>
            <hr />
            <div className="button-container">
                <div>
                    <button onClick={download} className="button-primary">Download Signature</button>
                </div>
                <div>
                    <button onClick={copyText} className="btn btn-primary">Copy Signature</button>
                    {
                        (() => {
                            if (copiedToClipboard) {
                                return <small>Copied To Clipboard</small>
                            } else {
                                return <span />
                            }
                        })()
                    }
                </div>
            </div>

        </section>
    )

}

