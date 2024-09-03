import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'


export default function FancyCard() {
    return (
        <View>
            <Text style={styles.headingText}>Fancy Card</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image
                    source={{ uri: 'download.jpeg' }}
                    style={styles.cardImage}
                />
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Taj Mahal</Text>
                    <Text style={styles.cardLabel}>Agra, Up</Text>
                    <Text style={styles.cardDescription}>Taj Mahal was built by Shah Jahan. It is one of the 7 wonders of the world</Text>
                    <Text style={styles.cardFooter}>4 Hours Away</Text>
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
    card: {
        width: 350,
        height: 345,
        borderRadius: 6,
        marginVertical: 12,
        marginHorizontal: 30
    },

    cardElevated: {
        backgroundColor: 'aqua',
        elevation: 6,
        shadowOffset: {
            width: 6,
            height: 1
        },
        shadowColor: 'black'
    },

    cardImage: {
        height: 180,
        marginBottom: 10,
        borderBottomRightRadius: 6,
        borderBottomLeftRadius: 6
    },

    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12
    },

    cardTitle: {
        color: 'black',
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 3
    },
    cardLabel: {
        color: 'black',
        fontSize: 20,
        fontWeight: 300,
        marginBottom: 3
    },
    cardDescription: {
        color: 'black',
        fontSize: 18,
        fontWeight: 200
    },
    cardFooter: {
        color: 'black',
        fontSize: 22,
        fontWeight: 300,
        marginTop: 1,
    }
})