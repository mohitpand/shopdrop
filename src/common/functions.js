import { FlatList, AppRegistry, Share, View, TouchableOpacity, Text, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';

    export const onShare = async (message) => {
        try {
          const result = await Share.share({
            message
          });
    
          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // dismissed
          }
        } catch (error) {
          alert(error.message);
        }
      };