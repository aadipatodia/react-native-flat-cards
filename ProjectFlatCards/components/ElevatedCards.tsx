import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
        <Text style= {styles.headingText}>Elevated Cards</Text>
        <ScrollView horizontal style= {styles.container}>
            <View style= {[styles.card, styles.cardElevated]}>
                <Text style= {styles.cardText}> Tap </Text>
            </View>
            <View style= {[styles.card, styles.cardElevated]}>
                <Text style= {styles.cardText}> me </Text>
            </View>
            <View style= {[styles.card, styles.cardElevated]}>
                <Text style= {styles.cardText}> To </Text>
            </View>
            <View style= {[styles.card, styles.cardElevated]}>
                <Text style= {styles.cardText}> The </Text>
            </View>
            <View style= {[styles.card, styles.cardElevated]}>
                <Text style= {styles.cardText}> Scrollbar </Text>
            </View>
        </ScrollView>
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
        padding: 8,
    },

    card: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        margin: 8,
        color: 'black'
    },

    cardElevated: {
        backgroundColor: 'yellow',
        elevation: 8,                               // gives the shadow effect
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: 'black'
    },
    cardText: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold'
    }
})