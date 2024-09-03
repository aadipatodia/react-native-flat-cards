import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Flatcards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style= {styles.container}>
        <View style= {[styles.card, styles.cardOne]}>
            <Text> Red </Text>
        </View>
        <View style= {[styles.card, styles.cardTwo]}>
            <Text> Blue </Text>
        </View>
        <View style= {[styles.card, styles.cardThree]}>
            <Text> Green </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 35,
        fontWeight: 'bold',
        margin: 10
    },
    
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 8
    },

    card: {
        width: 100,
        height: 100,
        margin: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30
    },

    cardOne: {
        backgroundColor: 'red'
    },
    
    cardTwo:{
        backgroundColor: 'blue'
    },
    
    cardThree:{
        backgroundColor: 'green'
    }
})