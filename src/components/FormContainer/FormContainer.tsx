import React from "react";
import {
  FormProvider,
  FieldValues,
  UseFormReturn,
} from "react-hook-form";
import { Form } from "./FormContainer.styled";

interface FormContainerProps<T extends FieldValues> {
  children: React.ReactNode;
  onSubmit: (data: T) => void;
  methods: UseFormReturn<T>;
}

function FormContainer<T extends FieldValues>({
  children,
  onSubmit,
  methods,
}: FormContainerProps<T>) {
  const handleSubmit = methods.handleSubmit(onSubmit);
  return (
    <FormProvider {...methods}>
      <Form onSubmit={handleSubmit}>{children}</Form>
    </FormProvider>
  );
}

export default FormContainer;
