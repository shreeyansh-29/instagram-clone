import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {USERS} from './story';
import {Divider} from 'react-native-elements';
import {colorPalette} from '../../constants/colorPalette';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
import {faHeart, faComment} from '@fortawesome/free-regular-svg-icons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';

export const POSTS = [
  {
    imageUrl: '../../assests/images/user.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[0].image,
    comments: [
      // {
      //   user: 'adi',
      //   comment: 'Amazing looks bro, you are so smarty',
      // },
      // {
      //   user: 'jasmine',
      //   comment: 'Amazing looks bro, you are so smarty',
      // },
    ],
  },
  {
    imageUrl: '../../assests/images/user.jpg',
    user: USERS[1].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'adi',
        comment: 'Amazing looks bro, you are so smarty',
      },
      {
        user: 'jasmine',
        comment: 'Amazing looks bro, you are so smarty',
      },
    ],
  },
  {
    imageUrl: '../../assests/images/shreeyansh.jpg',
    user: USERS[2].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[2].image,
    comments: [
      {
        user: 'adi',
        comment: 'Amazing looks bro, you are so smarty',
      },
      {
        user: 'jasmine',
        comment: 'Amazing looks bro, you are so smarty',
      },
    ],
  },
  {
    imageUrl: '../../assests/images/John.jpg',
    user: USERS[1].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[1].image,
    comments: [
      {
        user: 'adi',
        comment: 'Amazing looks bro, you are so smarty',
      },
      {
        user: 'jasmine',
        comment: 'Amazing looks bro, you are so smarty',
      },
    ],
  },
  {
    imageUrl: '../../assests/images/john1.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'adi',
        comment: 'Amazing looks bro, you are so smarty',
      },
      {
        user: 'jasmine',
        comment: 'Amazing looks bro, you are so smarty',
      },
    ],
  },
  {
    imageUrl: '../../assests/images/john1.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'adi',
        comment: 'Amazing looks bro, you are so smarty',
      },
      {
        user: 'jasmine',
        comment: 'Amazing looks bro, you are so smarty',
      },
    ],
  },
  {
    imageUrl: '../../assests/images/john1.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'adi',
        comment: 'Amazing looks bro, you are so smarty',
      },
      {
        user: 'jasmine',
        comment: 'Amazing looks bro, you are so smarty',
      },
    ],
  },
  {
    imageUrl: '../../assests/images/john1.jpg',
    user: USERS[0].user,
    likes: 7870,
    caption: 'Life is so hard',
    profile_picture: USERS[0].image,
    comments: [
      {
        user: 'adi',
        comment: 'Amazing looks bro, you are so smarty',
      },
      {
        user: 'jasmine',
        comment: 'Amazing looks bro, you are so smarty',
      },
    ],
  },
];

const Posts = ({post}) => {
  return (
    <View style={{marginBottom: 20}}>
      <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
        <PostFooter post={post} />
        <Likes post={post} />
        <Caption post={post} />
        <Comments post={post} />
      </View>
    </View>
  );
};

const PostHeader = ({post}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 6,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginLeft: 6}}>
        <LinearGradient
          colors={['#fa7e1e', '#d62976', '#fa7e1e']}
          style={{
            width: 38,
            height: 38,
            borderRadius: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}>
          <View
            style={{
              width: 36,
              height: 36,
              borderRadius: 36,
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              source={require('../../assests/images/shreeyansh.jpg')}
              style={styles.story}
            />
          </View>
        </LinearGradient>

        <Text style={styles.nameStyle}>{post.user}</Text>
      </View>

      <TouchableOpacity style={{marginRight: 6}}>
        <FontAwesomeIcon icon={faEllipsisVertical} size={18} />
      </TouchableOpacity>
    </View>
  );
};

const PostImage = ({post}) => {
  return (
    <View style={{width: '100%', height: 450}}>
      <Image
        source={require('../../assests/images/John.jpg')}
        resizeMode="cover"
        style={{height: '100%', width: '100%'}}
      />
    </View>
    // <Image
    //   source={require('../../assests/images/John.jpg')}
    //   style={{height: 450, width: '100%'}}
    //   resizeMode="cover"
    // />
  );
};

const PostFooter = ({post}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        // backgroundColor: 'red',
      }}>
      <View style={styles.leftFooterIconContainer}>
        <FontAwesomeIcon icon={faHeart} color="black" size={24} />
        <FontAwesomeIcon
          icon={faComment}
          color="black"
          size={24}
          style={{transform: [{rotateY: '180deg'}]}}
        />
        <Feather
          name="send"
          color="black"
          size={24}
          style={{transform: [{rotateZ: '20deg'}]}}
        />
      </View>
      <FontAwesome
        name="bookmark-o"
        color="black"
        size={24}
        style={{marginTop: -2}}
      />
    </View>
  );
};

const Likes = ({post}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 4}}>
      <Text style={{color: '#000', fontWeight: '600'}}>
        {post.likes.toLocaleString('en')} likes
      </Text>
    </View>
  );
};

const Caption = ({post}) => {
  return (
    <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
      <Text
        style={{
          color: colorPalette.blackColor,
          fontWeight: '600',
          marginRight: 5,
        }}>
        {post.user}
      </Text>
      <Text style={{color: '#000'}}>{post.caption}</Text>
    </View>
  );
};

const Comments = ({post}) => (
  <View style={{marginTop: 4}}>
    {post.comments.length > 0 ? (
      <Text style={{color: 'gray'}}>
        View {post.comments.length > 1 ? 'all' : ''} {post.comments.length}
        {post.comments.length > 1 ? ' comments' : ' comment'}
      </Text>
    ) : (
      <View style={{flexDirection: 'row', marginTop: 4, alignItems: 'center'}}>
        <Image
          source={require('../../assests/images/shreeyansh.jpg')}
          style={{
            width: 32,
            height: 32,
            borderRadius: 50,
          }}
        />
        <Text style={{color: 'gray', marginLeft: 10}}>Add a comment</Text>
      </View>
    )}
  </View>
);

const styles = StyleSheet.create({
  story: {
    width: 35,
    height: 35,
    borderRadius: 35,
    borderWidth: 1.6,
    borderColor: 'white',
  },
  nameStyle: {
    color: colorPalette.blackColor,
    marginLeft: 5,
    fontWeight: '700',
  },
  footerIcon: {
    width: 33,
    height: 33,
  },
  leftFooterIconContainer: {
    flexDirection: 'row',
    width: '28%',
    justifyContent: 'space-between',
  },
});

export default Posts;
