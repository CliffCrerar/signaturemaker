

import { formControls } from "../config"

export default function SingatureForm(props) {
    return (
        <form  name="signatureForm" onSubmit={props.submitForm}>
            <style jsx>{`
                form {
                    margin: 0 20px;
                }
                `}</style>
            {
                formControls.map(
                    control => (
                        <div
                            key={control.name}>
                            <label
                                htmlFor={control.name}>
                                Enter {control.name}:
                            </label>
                            <input
                                required
                                className="u-full-width"
                                id={control.name}
                                name={control.name}
                                type={control.type} />
                        </div>
                    )
                )
            }
            <br />
            <input type="submit" name="generate" value="Generate Signature" />
        </form>
    )
}