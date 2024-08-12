import{View, Text} from "react-native"
import React from "react"
import Button from './Button.js'
const COLORS = {
like: "#00eda6",
nope: "#ff006f",
star: "#07A6FF",
arrow_right: "#A34FDB",
arrow_left: "#F2B721"
}
const Footer = ({handleChoice}) => {
  return (
    <View style={{
        position: 'absolute',
        bottom: 15,
        width: 240,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        zIndex: -999
    }}>
      <Button
      name= "arrow_left"
      size={24}
      color={COLORS.arrow_left}
      />
      <Button
      name= "times"
      size={24}
      color={COLORS.nope}
      onPress={()=>handleChoice(-1)}
      />
      <Button
      name= "star"
      size={24}
      color={COLORS.star}
      style={{
        height: 40,
        width: 40
      }}
      />
      <Button
      name= "heart"
      size={24}
      color={COLORS.like}
      onPress={()=>handleChoice(1)}
      />
      <Button
      name= "arrow_right"
      size={24}
      color={COLORS.arrow_right}
      />
    </View>
  )
}

export default Footer
