import { Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from '@expo/vector-icons';
import { TaskType } from "../types/task";

type Props = {
    item: TaskType;
    onRemove: () => void;
    onDone: () => void;
}

export function Task({item, onRemove, onDone}: Props) {

    return (
        <View className="flex-row gap-2 bg-slate-700 rounded-md items-center mb-2 py-1">
            <TouchableOpacity className="rounded-md w-14 h-14 items-center justify-center" onPress={onDone}>
                {item.done === 0 ?
                    <FontAwesome5 
                        name="circle"
                        size={20}
                        color={"#f2f2f2"}
                    />
                    :
                    <FontAwesome5 
                        name="check-circle"
                        size={20}
                        color={"#f5f5f5"}
                    />
                }
            </TouchableOpacity>
            <Text className={`inline text-white flex-1 text-base ${item.done === 1 ? "line-through" : ''}`}>{item.description}</Text>

            <TouchableOpacity className="rounded-md w-14 h-14  items-center justify-center" onPress={onRemove}>
                <FontAwesome5 
                    name="trash-alt"
                    size={20}
                    color={"#fff"}
                />
            </TouchableOpacity>
        </View>
    );
}