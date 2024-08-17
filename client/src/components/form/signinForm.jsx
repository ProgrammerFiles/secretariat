import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, Container, TextField, Typography } from "@mui/material";
import { Stack, styled, textAlign } from "@mui/system";
import { apiConfig } from "../../config";


const SigninFormContainer = styled(Container)(({ theme }) => ({

    [theme.breakpoints.up("md")]: {
        width: "350px",
    }
}));

const SigninFormHeader = styled(Typography)(({ theme }) => ({
    fontSize: '32px',
    textAlign: 'center',

    [theme.breakpoints.down('md')]: {
        fontSize: '25px',
        textAlign: 'start',
    }
}))



const SigninForm = () => {
    const signinSchema = Yup.object({
        username: Yup.string().typeError("Please enter valid characters").min(4, "Atleast 4 characters").max("20", 'Maximum of 20 characters').required("Username is required"),
        password: Yup.string().typeError("Please valid character").min(7, 'Atleast 7 characters').max(20, 'Maximum of 20 character').required("Password is required")
    })
    return ( 
        <SigninFormContainer>
            <Formik
                initialValues={{ username: '', password: '' }}
                validateOnBlur={false}
                validationSchema={signinSchema}
                onSubmit={(values, {isSubmitted}) => {
                    console.log("form submitted");
                }}
            >
                {({ handleChange, touched, errors}) => (
                    <Form>
                        <Stack direction='column' spacing={3}>
                            <SigninFormHeader>
                                Login
                            </SigninFormHeader>

                            <Field
                                as={TextField}
                                name="username"
                                label="username"
                                autoComplete='off'
                                onChange={handleChange}
                                error={touched.username && Boolean(errors.username)}
                                helperText={touched.username && errors.username}
                            />

                            <Field
                                as={TextField}
                                name="password"
                                label="password"
                                autoComplete='off'
                                onChange={handleChange}
                                error={touched.password && Boolean(errors.password)}
                                helperText={touched.password && errors.password}
                            />

                            <Button
                                type='submit'
                                variant="contained"
                                size="large"
                            >
                                Submit
                            </Button>

                        </Stack>
                    </Form>
                )}
            </Formik>
        </SigninFormContainer>
     );
}
 
export default SigninForm;