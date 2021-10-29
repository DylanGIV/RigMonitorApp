import React, { useState } from 'react';
import { View, SectionList, SafeAreaView } from 'react-native';
import { Text, ActivityIndicator, IconButton } from 'react-native-paper';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchRigs } from '../../redux/actions/RigsActions';

const HomeScreen = (props) => {
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(fetchRigs())
    }, [])

    const theme = useSelector(state => state.theme.theme)
    const rigs = useSelector(state => state.rigs.rigs)
    const isLoading = useSelector(state => state.rigs.isLoading)

    console.log(rigs)
    
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background}}>
            <View style={{ flex: 1 }}>
                {(isLoading || !rigs) ? <ActivityIndicator size='large' /> :
                        <Text>
                            {rigs[0].rigName}
                        </Text>
                    // <SectionList
                    //     keyExtractor={(item, index) => item + index}
                    //     sections={rigs}
                    //     stickySectionHeadersEnabled={true}
                    //     showsVerticalScrollIndicator={false}
                    //     refreshing={isLoading}
                    //     onRefresh={() => fetchRigs()}
                    //     renderItem={({ item, section }) => {
                    //         console.log("yo")
                    //         return (
                    //                 <Text>
                    //                     {item.rigName}
                    //                 </Text>
                    //             )
                    //     }}
                    // />
                }
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen