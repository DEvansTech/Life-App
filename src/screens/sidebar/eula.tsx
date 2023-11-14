import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { BasicHeader } from "../../components/basic-header";

interface EulaProps {}

const EulaView: React.FC<EulaProps> = () => {
  return (
    <SafeAreaView>
      <BasicHeader name="Eula" hasClose={true} />
      <ScrollView className="p-8">
        <Text className="text-xl font-medium text-[#565656]">
          What is Eula?
        </Text>
        <Text className="mt-3.5 text-sm font-normal text-[#858585]">
          Updated at 2021-09-27
        </Text>
        <Text className="mt-5 text-sm font-normal text-[#565656]">
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about something important.
          This something has many uses and is made of 100% recycled material.
          This is a paragraph with more information about
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EulaView;
