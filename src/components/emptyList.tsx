import { Text, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
    params?: string;
}

export function EmptyList({params}: Props) {
    return (
        <View className="items-center justify-center gap-2 w-full p-2 flex-1">
            <FontAwesome5 
                name="clipboard-list"
                size={60}
                color={"#fff"}
            />
            <Text className="text-white font-semibold text-center">Você ainda não tem tarefas cadastradas</Text>
            <Text className="text-white text-center">Crie tarefas e organize seus itens a fazer</Text>
        </View>
    );
} 