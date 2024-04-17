import { Text, TouchableOpacity } from "react-native";

type Props = {
    title: string;
    onPress: () => void;
}

export function Button({title, onPress}: Props) {
    
    return (
        <TouchableOpacity className="bg-blue-900 shadow-lg w-14 h-14 items-center justify-center rounded-md backdrop-opacity-10" onPress={onPress}>
            <Text className="text-white text-lg">{title}</Text>
        </TouchableOpacity>
    )
}