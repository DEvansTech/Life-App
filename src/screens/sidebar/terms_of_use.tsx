import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { BasicHeader } from "../../components/basic-header";

interface TermsOfUseProps {}

const TermsOfUseView: React.FC<TermsOfUseProps> = () => {
  return (
    <SafeAreaView>
      <BasicHeader name="Terms And Services" hasClose={true} />
      <ScrollView className="p-8">
        <Text className="text-xl font-medium text-[#565656]">
          Terms of Use
        </Text>
        <Text className="mt-3.5 text-sm font-normal text-[#858585]">
          Updated at 2021-09-27
        </Text>
        <Text className="text-sm font-semibold text-[#565656] my-4">
          General Terms
        </Text>
        <Text className="text-sm font-normal text-[#565656]">
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

export default TermsOfUseView;
