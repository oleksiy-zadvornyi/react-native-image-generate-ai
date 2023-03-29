import React, {FC, useMemo, memo} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import HeaderComponent from 'components/Header';
import HistoryItemComponent from 'components/HistoryItem';
import {IAppState, IHistoryState} from 'types/state';
import {HistoryProps} from 'types/navigation';

import {getStyle} from './styles';

const HistoryComponent: FC<HistoryProps> = memo(() => {
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => getStyle(insets), [insets]);
  const {history} = useSelector((state: IAppState) => state.root);

  const keyExtractor = (item: IHistoryState) => item.url;

  const renderItem: ListRenderItem<IHistoryState> = ({item}) => (
    <HistoryItemComponent {...item} />
  );

  const ItemSeparatorComponent = () => <View style={styles.separator} />;

  return (
    <View style={styles.container}>
      <HeaderComponent label="History" />
      <FlatList<IHistoryState>
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        data={history}
        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparatorComponent}
      />
    </View>
  );
});

export default HistoryComponent;
