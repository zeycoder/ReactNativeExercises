import { Text } from 'react-native';
import {HStack, VStack} from 'react-native-flex-layout';

function Box() {
  return <Text>X</Text>
}

function App(){
  return (
    <VStack center>
      <HStack>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </HStack>
      <HStack>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </HStack>
      <HStack>
        <Box></Box>
        <Box></Box>
        <Box></Box>
      </HStack>
    </VStack>
  )
}

export default App;