import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcards from './components/Flatcards'
import ElevatedCards from './components/ElevatedCards'




const App = () => {
  return (
    <SafeAreaView>
        <ScrollView>
        <Flatcards />
        <ElevatedCards />
        </ScrollView>
    </SafeAreaView>
  )
}

export default App