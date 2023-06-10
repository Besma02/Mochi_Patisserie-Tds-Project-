
import {FormLabel, Input,FormHelperText, FormControl, Button,VStack, HStack} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import * as yup from "yup";
const validateSchema = yup.object().shape({
   name: yup.string().required("le nom est obligatoire"),
    price: yup.string().required("le prix >=0 "),
    like: yup.string().required("like >=0 "),
    quantity: yup.string().required("quantity >=0 "),
    description: yup.string().required("la description est obligatoire ")
    .min(300,"au minumum")
    

});
export const FormValidate = () => {
 
 
  return (
    <Formik
      initialValues={{
        name: "",
        price: "",
        like: "",
        quantity: "",
        description: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
      validationSchema={validateSchema}
    >
      <Form>
        <VStack>
          <Field name="name">
            {({ field, form }) => (
              <FormControl id="name" isInvalid={form.errors.name && form.touched.name}>
                <FormLabel>name</FormLabel>
                <Input type="text" {...field} />
                <FormHelperText>{form.errors.name}</FormHelperText>
              </FormControl>
            )}
          </Field>
          <HStack>
            <Field name="price">
              {({ field, form }) => (
                <FormControl id="price" isInvalid={form.errors.price && form.touched.price}>
                  <FormLabel>price</FormLabel>
                  <Input type="number" {...field} />
                  <FormHelperText>{form.errors.price}</FormHelperText>
                </FormControl>
              )}
            </Field>
            <Field name="like">
              {({ field, form }) => (
                <FormControl id="like" isInvalid={form.errors.like && form.touched.like}>
                  <FormLabel>like</FormLabel>
                  <Input type="number" {...field} />
                  <FormHelperText>{form.errors.like}</FormHelperText>
                </FormControl>
              )}
            </Field>
            <Field name="quantity">
              {({ field, form }) => (
                <FormControl id="quantity" isInvalid={form.errors.quantity && form.touched.quantity}>
                  <FormLabel>quantity</FormLabel>
                  <Input type="number" {...field} />
                  <FormHelperText>{form.errors.quantity}</FormHelperText>
                </FormControl>
              )}
            </Field>
            <Field name="description">
              {({ field, form }) => (
                <FormControl id="description" isInvalid={form.errors.description && form.touched.description}>
                  <FormLabel>description</FormLabel>
                  <Input type="text" {...field} />
                  <FormHelperText>{form.errors.description}</FormHelperText>
                </FormControl>
              )}
            </Field>

          </HStack>
        </VStack>
        <Button type="submit">send</Button>
      </Form>
    </Formik>
  );
};




