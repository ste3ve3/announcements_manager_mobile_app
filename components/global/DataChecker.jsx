import React from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';

const DataChecker = ({ title, isLoading, isError = null, isEmpty, children, customEmptyMessage, customLoaders }) => {
    if (isLoading) {
        if (customLoaders) return customLoaders;
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <ActivityIndicator size="large" color="secondary" />
                <Text style={{ color: "white"}}>{title ? title : 'Items'} loading, please wait...</Text>
            </View>  
        );
    }
    if (isError) {
        return (
            <View style={{ paddingVertical: 8 }}>
                <View severity="error" variant="outlined">
                    <Text>Error!</Text>
                    <Text>{isError || 'Oops, Something went wrong due to unknown error. Try to refresh the page and try again.'}</Text>
                </View>
            </View>
        );
    }
    if (isEmpty) {
        return (
            <View style={{ paddingVertical: 8 }}>
                <View severity="info" variant="outlined">
                    <Text>No {title ? title?.toLowerCase() : 'items'} found!</Text>
                    <Text>
                        {customEmptyMessage
                            ? customEmptyMessage
                            : `There are no ${title ? title?.toLowerCase() : 'items'} in our system yet!`}
                    </Text>
                </View> 
            </View>
        );
    }
    return <>{children}</>;
};

export default DataChecker;
