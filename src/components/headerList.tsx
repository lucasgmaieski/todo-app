import { Text, View } from "react-native";

type Props = {
    params?: string;
}

export function HeaderList({params}: Props) {
    return (
        <View className="bg-gray-700 flex-row justify-between gap-2 w-full p-2">
            <Text className="text-white w-1/2 text-center">Criadas</Text>
            <Text className="text-white w-1/2 text-center">Concluídas</Text>
        </View>
    );
}