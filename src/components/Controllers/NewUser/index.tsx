import React, { useRef } from "react";
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from "@gorhom/bottom-sheet";

import { Background } from "./styles";
import { Button } from "@components/Controllers/Button";
import { UserForm } from "@components/Forms/UserForm";
import { View } from "react-native";

export function NewUser() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  function handleSnapPress() {
    bottomSheetRef.current?.present();
  }

  function handleSnapClose(isSubmit: boolean) {
    if (isSubmit) {
      bottomSheetRef.current?.close();
    }
  }

  return (
    <>
      <View style={{ padding: 10 }}>
        <Button title="Novo Usuário" onPress={handleSnapPress} />
      </View>

      <BottomSheetModalProvider>
        <BottomSheetModal
          ref={bottomSheetRef}
          snapPoints={["65%"]}
          style={{ padding: 24 }}
          enablePanDownToClose={true}
          backdropComponent={() => <Background />}
        >
          <BottomSheetView>
            <UserForm
              onSubmit={(isSubmit: boolean) => {
                handleSnapClose(isSubmit);
              }}
            />
          </BottomSheetView>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </>
  );
}
