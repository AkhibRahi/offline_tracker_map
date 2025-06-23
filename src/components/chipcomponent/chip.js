import React from 'react';
import { FlatList, Pressable, Text, View } from 'react-native';
import styles from './style';

export default function Chip({
  data,
  numberShow,
  selectedIndex,
  onSelect,
  selectedBgColor,
}) {
  const renderItem = ({ item }) => {
    const isSelected = selectedIndex === item.id;

    return (
      <Pressable onPress={() => onSelect(item.id)}>
        <View
          style={[
            styles.smallCard,
            isSelected && {
              ...styles.smallCardSelected,
              backgroundColor: selectedBgColor,
            },
          ]}
        >
          <Text style={isSelected ? styles.smallCardTextSelected : styles.smallCardText}>
            {item.status}
          </Text>

          {numberShow && (
            <View style={styles.numberView}>
              <Text style={[styles.numberText, isSelected && styles.numberTextSelected]}>
                {item.number}
              </Text>
            </View>
          )}
        </View>
      </Pressable>
    );
  };

  return (
    <View style={{ paddingVertical: 10 }}>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
