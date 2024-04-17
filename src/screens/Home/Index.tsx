import { Task } from "@/src/components/task";
import { Button } from "@/src/components/button";
import { EmptyList } from "@/src/components/emptyList";
import { HeaderList } from "@/src/components/headerList";
import { ReactHTMLElement, useState } from "react";
import { Text, TextInput, Alert, View, ScrollView, FlatList, NativeSyntheticEvent, TextInputChangeEventData, ImageBackground } from "react-native";

export default function Home() {
    // const imageBg = {uri: "../assets/background.jpg"}
    const [tasks, setTasks] = useState<string[]>([])

    const [inputName, setInputName] = useState<string>("");

    function handleParticipantAdd() {
        if(inputName !== ''  && tasks.includes(inputName)) {
            return Alert.alert("Participante existe", "Já existe um participante com esse nome.");
        }

        setTasks(prevState => [...prevState, inputName]);
        setInputName("");
    }
    function handleTaskRemove(name: string) {

        Alert.alert("Remover", `Remover o participante ${name}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    Alert.alert("Deletado!")
                    setTasks(prevState => prevState.filter(participant => participant !== name))
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }
    return (
        <ImageBackground source={require('../../assets/background.jpg')} resizeMode="cover" className="flex-1">
            <View className="flex-1 px-6">
                <Text className="mt-14 mb-5 text-white text-2xl text-center font-bold">ToDo APP</Text>
                <View className="flex-row gap-2 justify-self-end">
                    <TextInput
                        className="bg-gray-700 py-1 px-2 rounded-md mb-2 h-14 flex-1 text-md placeholder:text-slate-300 text-white"
                        placeholder="Adicione uma nova tarefa"
                        onChangeText={setInputName}
                        value={inputName}
                    />
                    <Button title="+" onPress={handleParticipantAdd}/>
                </View>
                <View className="relative flex-1 my-5 rounded-md overflow-hidden gap-1">
                    <View className="absolute w-full h-full bg-gray-700 opacity-60 rounded-md" ></View>
                    <HeaderList />
                    {tasks.length > 0 &&
                        <ScrollView>
                            {
                                tasks.map((participant, index) => (
                                    <Task
                                        key={index}
                                        name={participant}
                                        onRemove={() => handleTaskRemove(participant)}
                                    />
                                ))
                            }
                        </ScrollView>
                    }
                    {tasks.length === 0 &&
                        <EmptyList />
                    }
                </View>
                
            </View>
        </ImageBackground>

    );
}