# React Native Chips 

A React Native component which is used to represent array of text. Inspired from material design chips

## Getting Started


`npm i react-native-chips --save`

## Usage

```
import ReactChipsInput from ('react-native-chips');

<ReactChipsInput label="Enter Fruits" intialChips={["Apple", "orange"]} onChangeChips={(chips) => console.log(chips)} />
```

## Properties
 name                 | description                                 | type     | default
:-------------------- |:------------------------------------------- |:-------- |:------------------
 label            | Placeholder for the Text input                     | String    | 'Enter your text'
initialChips            | Initial Chips to be present                     | Array    | -
onChangeChips            | To get the value of chips in array                     | Function    | -
## Sample
```
![alt Sample](https://github.com/ramprasath25/react-native-chips/demo.gif)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
react-native-chips is [MIT](https://choosealicense.com/licenses/mit/) License @ Ramprasath R 