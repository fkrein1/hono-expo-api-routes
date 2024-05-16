import { AuthorsServices } from '@/src/services/authors';
import { useQuery } from '@tanstack/react-query';
import { Text, View } from 'react-native';

export default function Tab() {
  const { data } = useQuery({ queryFn: AuthorsServices.getClients, queryKey: ['fa'] });
  const { data: data2 } = useQuery({ queryFn: () => AuthorsServices.getOneClient('2'), queryKey: ['fb'] });

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text>{data}</Text>
      <Text>{data2}</Text>
    </View>
  );
}
