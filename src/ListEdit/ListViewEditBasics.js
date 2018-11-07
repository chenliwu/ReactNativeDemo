/**
 * Created by zhuang.haipeng on 2017/9/12.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Dimensions,
    ListView,
    Text,
    Image
} from 'react-native';

const { width, height } = Dimensions.get('window');

var collectionArray = [
    { collectItem: "collectItem1" },
    { collectItem: "collectItem2" },
    { collectItem: "collectItem3" },
    { collectItem: "collectItem4" },
    { collectItem: "collectItem5" },
    { collectItem: "collectItem6" },
    { collectItem: "collectItem7" },
    { collectItem: "collectItem8" },
    { collectItem: "collectItem9" },
    { collectItem: "collectItem10" }
];

export default class ListViewEditBasics extends React.Component {

    constructor(props) {
        super(props);

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows([]),
            isEdit: false,
            isChecked: false,
            isAllSelect: false,
            isShowBottom: false,
            selectMap: new Map(),
            // preIndex: 0 // 声明点击上一个按钮的索引  **** 单选逻辑 ****
        };
    }

    componentDidMount() {
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(collectionArray)
        })
    }

    render() {
        //用于处理全选逻辑
        let temp = [...this.state.selectMap.values()];
        let isChecked = temp.length === this.state.dataSource._cachedRowCount;

        return (
            <View style={{ flex: 1 }}>
                {
                    // 如果处于编辑模式，则显示顶部标题栏
                    this.state.isShowBottom == true ?
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => this.allSelect(isChecked)}>
                                <Text style={{ marginLeft: 10 }}>全选</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ marginRight: 10 }} onPress={() => this._cancelEdit()}>
                                <Text>完成</Text>
                            </TouchableOpacity>
                        </View> : null
                }

                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.dataSource}>
                </ListView>
                {
                    this.state.isShowBottom == true ?
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60 }}>
                            <TouchableOpacity onPress={() => alert("批量处理")}>
                                <Text style={{ marginLeft: 10 }}>批量处理</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => this.deleteItem()}>
                                <Text style={{ marginRight: 10 }}>删除</Text>
                            </TouchableOpacity>
                        </View> : null
                }
            </View >
        );
    }


    /**
     * 取消编辑模式
     */
    _cancelEdit = () => {
        this.setState({
            isEdit: false,
        }, () => {
            this.setState({
                isShowBottom: this.state.isEdit ? true : false
            })
        });
    }



    /**
     * item点击事件
     */
    _onSelectItem = (key, value, isChecked) => {
        this.setState({
            isChecked: !this.state.isChecked,
            // preIndex: key  //  **** 单选逻辑 ****
        }, () => {
            let map = this.state.selectMap;
            if (isChecked) {
                map.delete(key, value) // 再次点击的时候,将map对应的key,value删除
            } else {
                // map = new Map() // ------>   **** 单选逻辑 ****
                map.set(key, value) // 勾选的时候,重置一下map的key和value
            }
            this.setState({ selectMap: map })
        });
    }

    /**
     * 长按item事件，转变成编辑模式
     */
    _onLongPressItem = (rowID, item) => {
        if (this.state.isEdit) {
            //如果已经处在编辑模式，则不处理长按事件
            return;
        }
        this.setState({
            isEdit: !this.state.isEdit,
            selectMap: new Map()
        }, () => {
            this.setState({
                isShowBottom: this.state.isEdit ? true : false
            })
        });
        this.selectItem(parseInt(rowID), item, false);   //选中长按的Item
    }


    /**
     * 渲染item
     */
    renderRow = (rowData, sectionID, rowID) => {
        let map = this.state.selectMap;
        let isChecked = map.has(parseInt(rowID));
        //**** 单选逻辑 ****
        // 选中的时候, 判断上一个索引不等于rowID的时候,不让他选中  
        // 将rowID转成Int,然后将Int类型的ID当做Key传给Map
        // let isChecked = parseInt(rowID) == this.state.preIndex ?  map.has(parseInt(rowID)) : false; 
        return (
            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
                this.selectItem(parseInt(rowID), rowData.collectItem, isChecked);
            }} onLongPress={() => {
                this._onLongPressItem(rowID, rowData.collectItem);
            }}>
                <View style={{
                    width: width, height: 60, backgroundColor: "#EEEEDD",
                    marginBottom: 10,
                    flexDirection: 'row', alignItems: "center", justifyContent: 'center',
                }}>
                    {
                        // 处于编辑模式，则显示选择按钮
                        this.state.isEdit ?
                            <TouchableOpacity style={{ position: 'absolute', left: 0, marginLeft: 10 }} onPress={
                                () => this.selectItem(parseInt(rowID), rowData.collectItem, isChecked)}>
                                <Image source={isChecked ? require("./../icon/selected.png") :
                                    require("./../icon/unselected.png")} />
                            </TouchableOpacity> : null
                    }
                    <Text>{rowData.collectItem}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    /**
     * 编辑按钮事件
     */
    editClick = () => {
        // 编辑
        this.setState({
            isEdit: !this.state.isEdit,
            selectMap: new Map()
        }, () => {
            this.setState({
                isShowBottom: this.state.isEdit ? true : false
            })
        })
    };

    /**
     * 删除按钮事件
     */
    deleteItem = () => {
        let { selectMap } = this.state;
        let valueArr = [...selectMap.values()];
        let keyArr = [...selectMap.keys()];
        alert("删除" + valueArr)
    };

    /**
     * 全选按钮事件
     */
    allSelect = (isChecked) => {
        this.setState({
            isAllSelect: !isChecked
        });
        if (isChecked) { // 如果已经勾选了,则取消选中
            this._cancelAllSelect();
        } else { // 没有勾选的, 全部勾选
            let newMap = new Map();
            for (let key = 0; key < collectionArray.length; key++) {
                let value = collectionArray[key].collectItem; // 拿到数组的collectItem
                newMap.set(key, value); // 第一个key, 第二个是value
            }
            this.setState({ selectMap: newMap })
        }
    }

    /**
     * 取消全选
     */
    _cancelAllSelect = () => {
        let { selectMap } = this.state;
        selectMap = new Map();
        this.setState({ selectMap })
    }



    /**
     * 单选
     */
    selectItem = (key, value, isChecked) => { // 单选

        this.setState({
            isChecked: !this.state.isChecked,
            // preIndex: key  //  **** 单选逻辑 ****
        }, () => {
            let map = this.state.selectMap;
            if (isChecked) {
                map.delete(key, value) // 再次点击的时候,将map对应的key,value删除
            } else {
                // map = new Map() // ------>   **** 单选逻辑 ****
                map.set(key, value) // 勾选的时候,重置一下map的key和value
            }
            this.setState({ selectMap: map });
        })
    }
};