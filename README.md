# React Native Chips 

A React Native component which is used to represent array of text. Inspired from material design chips

## Getting Started


`npm i react-native-chips --save`

## Usage

```
import ReactChipsInput from 'react-native-chips';

<ReactChipsInput label="Enter Fruits" initialChips={["Apple", "Orange"]} onChangeChips={(chips) => console.log(chips)} alertRequired={true} chipStyle={{ borderColor: 'blue', backgroundColor: 'grey' }}/>
```

## Properties
 name                 | description                                 | type     | default
:-------------------- |:------------------------------------------- |:-------- |:------------------
 label            | Placeholder for the Text input                     | String    | 'Enter your text'
initialChips            | Initial Chips to be present                     | Array    | -
onChangeChips            | To get the value of chips in array                     | Function    | -
alertRequired            | To trigger alert on adding and removing chips                     | Boolean    | false
chipStyle            | Changing the style of chip elements                    | Style Object    | -
## Sample

![demo](https://user-images.githubusercontent.com/7905501/47231711-4dbff080-d3eb-11e8-888e-09b7782e8105.gif)
![demo_with_alert](https://user-images.githubusercontent.com/7905501/47633624-978ba200-db74-11e8-9ce3-1ad149c719e6.gif)

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
react-native-chips is [MIT](https://choosealicense.com/licenses/mit/) License @ Ramprasath R 
