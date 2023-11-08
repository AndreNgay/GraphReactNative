import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

// Dummy data for completed and incomplete assignments
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  datasets: [
    {
      data: [4, 6, 2, 7, 5, 8, 3], // Completed assignments
      color: (opacity = 1) => `rgba(0, 128, 0, ${opacity})`, // Green color for completed assignments
      strokeWidth: 2, // Line thickness for completed assignments
    },
    {
      data: [3, 5, 8, 2, 9, 4, 6], // Incomplete assignments
      color: (opacity = 1) => `rgba(255, 0, 0, ${opacity})`, // Red color for incomplete assignments
      strokeWidth: 2, // Line thickness for incomplete assignments
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
}
const MyGraph = () => {
  return (
    <View style={styles.container}>
      <LineChart
        data={data}
        width={300}
        height={200}
        chartConfig={chartConfig}
        style={{ marginVertical: 8 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the chart vertically
    alignItems: 'center', // Center the chart horizontally
  },
});

export default MyGraph;
