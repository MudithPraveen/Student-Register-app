import { StyleSheet, FlatList, View, Text } from 'react-native';
import React, { useContext } from 'react';
import { CounterContext } from './CounterProvider';

export default function ViewStu() {
  const { students } = useContext(CounterContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>View Students</Text>
      {/* Table Header */}
      <View style={styles.tableRow}>
        <Text style={[styles.tableHeader, styles.tableCell]}>Register Number</Text>
        <Text style={[styles.tableHeader, styles.tableCell]}>Name</Text>
      </View>
      {/* Table Body */}
      <FlatList
        data={students}
        keyExtractor={(item) => item.rgno}
        renderItem={({ item }) => (
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, styles.tableData]}>{item.rgno}</Text>
            <Text style={[styles.tableCell, styles.tableData]}>{item.name}</Text>
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
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
  },
  tableHeader: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tableCell: {
    flex: 1,
    textAlign: 'center',
    padding: 5,
  },
  tableData: {
    fontSize: 14,
  },
});
