import { StyleSheet, FlatList, View, Text } from 'react-native';
import React, { useContext } from 'react';
import { CounterContext } from './CounterProvider';

export default function ViewStu() {
  const { students } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Students</Text>
      {/* Table Header */}
      <View style={styles.tr}>
        <Text style={styles.th}>Register Number</Text>
        <Text style={styles.th}>Name</Text>
      </View>
      {/* Table Body */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.rgno}
        renderItem={({ item }) => (
          <View style={styles.tr}>
            <Text style={styles.td}>{item.rgno}</Text>
            <Text style={styles.td}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 40,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  tr: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  th: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 16,
    padding: 5,
  },
  td: {
    flex: 1,
    fontSize: 14,
    padding: 5,
  },
});
