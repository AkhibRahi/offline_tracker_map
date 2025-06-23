import React, { useState, useCallback } from 'react';
import { View, FlatList, Pressable, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import styles from './style';
import { productData, trendingChip } from '../../utils/data/dummyData';
import { COLORS, Width } from '../../themes';
import Chip from '../../components/chipcomponent/chip';

export default function BottomsheetScreen({ navigation }) {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleChipSelect = useCallback((index) => {
    setSelectedIndex(index);
  }, []);

  const handleProductPress = useCallback(
    (item) => {
      navigation.navigate('CustomBottomSheet', { item });
    },
    [navigation]
  );

  const renderProductItem = ({ item }) => (
    <Pressable onPress={() => handleProductPress(item)}>
      <View style={styles.card}>
        <View style={styles.mainView}>
          <View style={styles.iconMainView}>
            <View style={[styles.IconContainer, { backgroundColor: COLORS.arrowUpBack }]}>
              <Icon name="package" size={Width * 0.04} color={COLORS.arrowUp} />
            </View>
            <Text style={styles.highText}>Product</Text>
          </View>
        </View>

        <View style={styles.productView}>
          <Text style={styles.productName}>{item.productName}</Text>
          <Text style={styles.productDesc}>{item.description}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Chip Row */}
      <Chip
        data={trendingChip}
        numberShow={true}
        selectedIndex={selectedIndex}
        onSelect={handleChipSelect}
        selectedBgColor={COLORS.primary}
      />

      {/* Product List */}
      <FlatList
        data={productData}
        keyExtractor={(item) => item.productId.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: Width * 0.2 }}
        renderItem={renderProductItem}
      />
    </View>
  );
}
