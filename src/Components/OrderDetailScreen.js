import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  FlatList,
  TouchableOpacity,
  Pressable,
  ScrollView
} from 'react-native'

import { Dimensions } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const CardViewAvatarW = windowWidth
const CardViewAvatarH = windowWidth * 0.25

const OrderDetailScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.cardviewAvatar}></View>
        <View style={styles.cardviewChildren}>
          <Text style={styles.cardviewText}>Product</Text>
          <View style={styles.cardviewInside1}>
            <Image
              style={styles.img}
              source={require('../../assets/image/jacket/HUF.jpg')}
            />
            <View style={styles.textColum}>
              <Text style={styles.textnameP}>Áo Facebook</Text>
              <Text style={styles.textpriceP}>$500</Text>
            </View>
            <MaterialCommunityIcons
              style={styles.icons}
              name='heart-outline'
              size={26}
              color='black'
            />
          </View>

          <View style={styles.cardviewInside1}>
            <Image
              style={styles.img}
              source={require('../../assets/image/jacket/HUF.jpg')}
            />
            <View style={styles.textColum}>
              <Text style={styles.textnameP}>Áo Facebook</Text>
              <Text style={styles.textpriceP}>$500</Text>
            </View>
            <MaterialCommunityIcons
              style={styles.icons}
              name='heart-outline'
              size={26}
              color='black'
            />
          </View>
        </View>
        {/* ship */}
        <View style={styles.cardviewChildren}>
          <Text style={styles.cardviewText}>Shipping Details</Text>
          <View style={styles.cardviewShip}>
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                Date Shipping
              </Text>
              <Text Text style={styles.textlist2}>
                20/20/2222
              </Text>
            </View>
            {/* <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist2}>Order Status</Text>
              <Text Text style={styles.textlist4}>priceOrder</Text>      
          </View>
          <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist2}>Order Status</Text>
              <Text Text style={styles.textlist4}>priceOrder</Text>      
          </View> */}
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                Address
              </Text>
              <Text Text style={styles.textlist3}>
                205/3 Bình Trị Đông, Quận Bình Tân, TP. HCM
              </Text>
            </View>
          </View>
        </View>
        {/* Payment */}
        <View style={styles.cardviewChildren}>
          <Text style={styles.cardviewText}>Payment Details</Text>
          <View style={styles.cardviewShip}>
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                item (2)
              </Text>
              <Text Text style={styles.textlist2}>
                $1000
              </Text>
            </View>
            <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist1}>
                Ship fee
              </Text>
              <Text Text style={styles.textlist2}>
                $40
              </Text>
            </View>
            {/* <View style={styles.cardviewInside2}>
              <Text Text style={styles.textlist2}>Order Status</Text>
              <Text Text style={styles.textlist4}>priceOrder</Text>      
          </View> */}
            <View style={styles.cardviewInside3}>
              <Text Text style={styles.texttotal}>
                Total Price
              </Text>
              <Text Text style={styles.textprice}>
                $1040
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewbutton}>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonText}>Notify Me</Text>
        </TouchableOpacity>
      </View>
      
    </ScrollView>
  )
}

export default OrderDetailScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  cardviewAvatar: {
    // flexDirection:'row',
    width: CardViewAvatarW / 1.06,
    height: CardViewAvatarH,
    backgroundColor: 'black',
    alignItems: 'center'
    // borderBottomColor: '#D5DBDB',
    // borderBottomWidth: 1,
  },
  cardviewChildren: {
    // marginVertical:5,
    width: CardViewAvatarW,
    padding: 10
    // borderWidth:1,
  },
  cardviewText: {
    color: 'darkblue',
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardviewInside1: {
    borderWidth: 1,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent:'space-between',
    borderColor: '#EBF0FF',
    marginVertical: 3
  },
  img: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10
  },
  textColum: {
    // borderWidth:1,
  },
  textnameP: {
    color: 'darkblue',
    fontWeight: 'bold',
    marginBottom: 35
  },
  textpriceP: {
    color: '#40BFFF',
    fontWeight: 'bold'
  },
  icons: {
    position: 'absolute',
    right: 5,
    top: 10
  },
  cardviewShip: {
    borderWidth: 1,
    borderColor: '#EBF0FF',
    padding: 5,
    marginVertical: 5
  },
  cardviewInside2: {
    // borderWidth: 1,
    padding: 3,
    flexDirection: 'row',
    borderColor: '#EBF0FF',
    justifyContent: 'space-between'
  },
  textlist3: {
    // borderWidth:1,
    color: '#223263',
    width: 73
  },
  textlist2: {
    color: '#223263'
  },
  textlist1: {
    // borderWidth:1,
    color: '#9098B1'
  },
  cardviewInside3: {
    // borderWidth: 1,
    marginVertical: 7,
    paddingHorizontal: 3,
    borderTopWidth: 1,
    flexDirection: 'row',
    borderColor: '#EBF0FF',
    justifyContent: 'space-between'
  },
  texttotal: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'darkblue'
  },
  textprice: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#40BFFF'
  },
  buttons:
  {
    
    width: CardViewAvatarW / 1.06,
    
    height: CardViewAvatarH/1.5,
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:'#40BFFF',
    borderRadius:10,    

  },
  viewbutton:
  {
    padding: 10,
    backgroundColor:'white'
  },
  buttonText:{
    color:'white',
  }
})
