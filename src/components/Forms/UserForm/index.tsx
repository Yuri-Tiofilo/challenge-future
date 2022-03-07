import React, { useState } from "react";

import firestore from "@react-native-firebase/firestore";

import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Masks } from "react-native-mask-input";

import { Form, Title } from "./styles";
import { Button } from "@components/Controllers/Button";
import { InputForm } from "@components/Controllers/Form/InputForm";

import { Alert } from "react-native";
import { MaskInputForm } from "@components/Controllers/Form/MaskInputForm";

interface UserFormProps {
  onSubmit(param: boolean): any;
}

type User = {
  name: string;
  email: string;
  cellphone: string;
};

const schema = Yup.object().shape({
  email: Yup.string().email("E-mail invalido").required("Email é obrigatório"),
  name: Yup.string().required("Nome é obrigatório"),
  cellphone: Yup.string().required("Telefone é obrigatório"),
});

export function UserForm({ onSubmit }: UserFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function handleNewUser(form: User) {
    setIsLoading(true);
    firestore()
      .collection("users")
      .add({
        name: form.name,
        email: form.email,
        cellphone: form.cellphone,
        created_at: firestore.FieldValue.serverTimestamp(),
      })
      .then(() => Alert.alert("Novo usuário", "Usuário criado com sucesso"))
      .catch((error) => {
        setIsLoading(false);
        Alert.alert("Error no usuário", "Tivemos um problema");
      })
      .finally(() => {
        setIsLoading(false);

        onSubmit(true);
      });
  }

  return (
    <Form indicatorStyle="white" >
      <Title>Novo Usuário</Title>

      <InputForm
        name="name"
        control={control}
        placeholder="Nome"
        error={errors.name && errors.name.message}
      />

      <InputForm
        name="email"
        control={control}
        placeholder="Email"
        error={errors.email && errors.email.message}
      />
      <MaskInputForm
        name="cellphone"
        control={control}
        error={errors.cellphone && errors.cellphone.message}
        mask={Masks.BRL_PHONE}
        maxLength={15}
        placeholder="Telefone"
      />

      <Button
        title="Salvar Usuário"
        isLoading={isLoading}
        onPress={handleSubmit(handleNewUser)}
      />
    </Form>
  );
}
