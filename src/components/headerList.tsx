import { Text, View } from "react-native";

type Props = {
    tabActive: 0 | 1;
    setTabActive: React.Dispatch<React.SetStateAction<0|1>>
    quantityDone: number;
    quantityTotal: number;
}

export function HeaderList({tabActive, setTabActive, quantityDone, quantityTotal}: Props) {
    return (
        <View className="bg-gray-700 flex-row justify-between gap-2 w-full">
            <View className={`w-1/2 flex-row justify-center items-center p-2 gap-2 ${tabActive === 0 ? 'bg-white text-black' : 'bg-transparent'}`}>
                <Text className={`text-white text-center ${tabActive === 0 ? 'bg-white text-black' : 'bg-transparent'}`} onPress={() => setTabActive(0)}>Criadas</Text>
                <Text className={`p-1 rounded-full ${tabActive === 0 ? 'text-black' : 'text-white'}`}>{quantityTotal}</Text>
            </View>
            <View className={`w-1/2 flex-row justify-center items-center p-2 gap-2 ${tabActive === 1 ? 'bg-white text-black' : 'bg-transparent'}`}>
                <Text className={`text-white text-center ${tabActive === 1 ? 'bg-white text-black' : 'bg-transparent'}`} onPress={() => setTabActive(1)}>Concluídas</Text>
                <Text className={`p-1 rounded-full ${tabActive === 1 ? 'text-black' : 'text-white'}`}>{quantityDone}</Text>
            </View>
        </View>
    );
}