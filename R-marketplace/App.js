import React from 'react';
import {Text, TextInput, View, Image, AlertButton} from 'react-native';

const Cat = props => {
  const[isHungry, setIsHungry] = useState(true);

  return (
    <View>
      <Text>
        I am {props.name}, and I am {isHungry ? 'hungry' : 'full'}!
      </Text>
      <Button>
        onPress={()=> {
          setIsHungry(false);
        }}
        disabled={!ishungry}
        title={isHungry ? 'pour me some milk, please!' : 'Thank you!'}
      </Button>
    </View>


  );
};

const Cafe = () => {
  return (
    <>
    <Cat name = "munkustrap" />
    <Cat name = "Spot"/>
    </>
  );
};

export default Cafe;