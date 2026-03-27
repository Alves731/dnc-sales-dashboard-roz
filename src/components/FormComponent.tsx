import { StyledButton, StyledInput } from '@/components'
import type {FormComponentProps}  from "@/types"
import {pxTORem} from '@/utils'
import styled from 'styled-components'




function FormComponent(props: FormComponentProps) {
    const { inputs, buttons, message } = props
    const StyledForm = styled.form`
display: flex;
flex-direction: column;
row-gap: ${pxTORem(16)};
`
    return (
        <StyledForm>
            {inputs.map((inputProps, index) => (
                <StyledInput key={index} {...inputProps} />
            ))}
            {buttons.map((buttonProps, index) => (
                <StyledButton key={index} {...buttonProps} />
            ))}
            {
                message && (<div style={{color: message.type === 'error' ? 'red' : 'green'}}>
                    {message.msg}
                </div>)
            }
        </StyledForm>
    )
}

export default FormComponent