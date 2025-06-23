import React, { useEffect, useRef } from 'react';
import {
  View,
  Text,
  Animated,
  PanResponder,
  TouchableWithoutFeedback,
  Pressable,
  FlatList,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { COLORS, Height } from '../../themes';
import { productData } from '../../utils/data/dummyData';
import styles from './styles';

export default function CustomBottomSheet({ route, navigation }) {
  const { item } = route.params;
  const animatedValue = useRef(new Animated.Value(Height)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 10,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy > 0) {
          animatedValue.setValue(Height * 0.3 + gestureState.dy);
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy > 100) {
          closeSheet();
        } else {
          openSheet();
        }
      },
    })
  ).current;

  const openSheet = () => {
    Animated.timing(animatedValue, {
      toValue: Height * 0.3,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const closeSheet = () => {
    Animated.timing(animatedValue, {
      toValue: Height,
      duration: 200,
      useNativeDriver: false,
    }).start(() => navigation.goBack());
  };

  useEffect(() => {
    openSheet();
  }, []);

  const renderRelatedItem = ({ item }) => (
    <View style={styles.relatedCard}>
      <Image source={item.imageUrl} style={styles.relatedImage} />
      <Text style={styles.relatedName}>{item.productName}</Text>
    </View>
  );

  return (
    <View style={styles.backdrop}>
      <TouchableWithoutFeedback onPress={closeSheet}>
        <View style={{ flex: 1 }} />
      </TouchableWithoutFeedback>

      <Animated.View
        style={[
          styles.sheetContainer,
          { transform: [{ translateY: animatedValue }] },
        ]}
        {...panResponder.panHandlers}>
        <View style={styles.dragHandle} />
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{item.productName}</Text>
            <Pressable onPress={closeSheet}>
              <Icon name="x" size={24} color={COLORS.black} />
            </Pressable>
          </View>

          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.sectionTitle}>Related Products</Text>

          <FlatList
            horizontal
            data={productData}
            keyExtractor={(item) => item.productId.toString()}
            renderItem={renderRelatedItem}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.horizontalList}
          />
        </View>
      </Animated.View>
    </View>
  );
}
