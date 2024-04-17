import { Task } from "@/src/components/task";
import { Button } from "@/src/components/button";
import { EmptyList } from "@/src/components/emptyList";
import { HeaderList } from "@/src/components/headerList";
import { useState } from "react";
import { Text, TextInput, Alert, View, ScrollView, ImageBackground } from "react-native";
import { TaskType } from "@/src/types/task";

export default function Home() {
    const [tasks, setTasks] = useState<TaskType[]>([])
    const [tabActive, setTabActive] = useState<0 | 1>(0);
    const [inputName, setInputName] = useState<string>("");

    function handleParticipantAdd() {
        if(inputName.trim() === "") return Alert.alert("Campo vázio", "Digite a descrição da sua tarefa");
        
        setTasks((prevTasks) => [...prevTasks, {description: inputName, done: 0}]);
        setInputName("");
    }
    function handleTaskDone(description: string) {
        const updatedTasks: TaskType[]= tasks.map((item) => {
            if (item.description === description) {
                return { ...item, done: item.done === 0 ? 1 : 0 };
            };
            return item;
        })
        setTasks(updatedTasks);
    }
    function handleTaskRemove(description: string) {
        Alert.alert("Remover", `Remover a tarefa ${description}?`, [
            {
                text: 'Sim',
                onPress: () => {
                    Alert.alert("Deletado!")
                    setTasks(prevState => prevState.filter(item => item.description !== description))
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
                    <HeaderList tabActive={tabActive} setTabActive={setTabActive} quantityDone={tasks.filter(item => item.done === 1).length} quantityTotal={tasks.length}/>
                    {tasks.length > 0 &&
                        <ScrollView>
                            {
                                tasks.map((item, index) => { 
                                    if(tabActive === 0)
                                    {
                                        return (
                                            <Task
                                                key={index}
                                                item={item}
                                                onRemove={() => handleTaskRemove(item.description)}
                                                onDone={() => handleTaskDone(item.description)}
                                            />
                                        )
                                    }

                                    else if(item.done === tabActive) {
                                        return (
                                            <Task
                                                key={index}
                                                item={item}
                                                onRemove={() => handleTaskRemove(item.description)}
                                                onDone={() => handleTaskDone(item.description)}
                                            />
                                        )
                                    }
                                })
                            }
                        </ScrollView>
                    }
                    {tasks.length === 0 &&
                        <EmptyList tabActive={tabActive}/>
                    }
                </View>
            </View>
        </ImageBackground>
    );
}