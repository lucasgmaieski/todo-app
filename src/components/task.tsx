import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';

type Props = {
    name: string;
    onRemove: () => void;
}

export function Task({name, onRemove}: Props) {

    return (
        <View className="flex-row gap-2 bg-slate-600 rounded-md items-center mb-2">
            <Text className="text-white ml-4 flex-1 text-base">{name}</Text>

            <TouchableOpacity className="rounded-md w-14 h-14 bg-red-600 items-center justify-center" onPress={onRemove}>
                <FontAwesome5 
                    name="trash-alt"
                    size={20}
                    color={"#fff"}
                />
            </TouchableOpacity>
        </View>
    );
}