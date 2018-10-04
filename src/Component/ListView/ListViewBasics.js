import React from 'react';
import {
    View,
    StyleSheet,
    Button,
    Text,
    Image,
    ListView,
    Dimensions
} from 'react-native';


const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 != r2
});

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

/**
 * 1、先定义数据模型，然后再考虑具体功能的实现
 */
export default class ListViewBasics extends React.Component {

    constructor(props) {
        super(props);
        //通过this.state初始化数据
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    image: require('./images/advertisement1.jpg'),
                    title: "标题1",
                    subTitle: "子标题1"
                }, {
                    image: require('./images/advertisement2.jpg'),
                    title: "标题2",
                    subTitle: "子标题2"
                }, {
                    image: require('./images/advertisement3.jpg'),
                    title: "标题3",
                    subTitle: "子标题3"
                }, {
                    image: require('./images/advertisement3.jpg'),
                    title: "标题4",
                    subTitle: "子标题4"
                },
            ])
        }
    }

    /**
     * 绘制行数据，即item
     */
    _renderRow = (rowData, sectionID, rowID) => {
        return (
            <View style={styles.listRow}>
                <Image source={rowData.image} style={styles.listItemImage}></Image>
                <View>
                    <Text>{rowData.title}</Text>
                    <Text>{rowData.subTitle}</Text>
                </View>
            </View>
        )
    }

    /**
     * 绘制分割线
     * @param {*} sectionID 
     * @param {*} rowID 
     * @param {*} adjacentRowHighlighted 
     */
    _renderSeperator(sectionID, rowID, adjacentRowHighlighted) {
        return (
            <View key={`${sectionID}-${rowID}`} style={styles.divider}></View >
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <ListView dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    renderSeparator={this._renderSeperator}
                ></ListView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1, flexDirection: 'column', justifyContent: 'center',
    },
    listRow: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        height: 60,
        backgroundColor: 'white',
    },
    listItemImage: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginRight: 10,
    },
    listItemText: {
        flex: 1,
        marginTop: 10,
        marginBottom: 10,
    },
    divider: {
        height: 1,
        width: screenWidth - 5,
        backgroundColor: 'lightgray',
    }
});

