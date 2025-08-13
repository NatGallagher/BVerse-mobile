// screens/Dashboard.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';

const VERSES = [
  { key: 'salvation', label: 'Assurance of Salvation', text: `"This is the testimony: God has given us eternal life, and this life is in His Son. Whoever has the Son has Life; whoever does not have the Son of God does not have life" — 1 John 5:11–12` },
  { key: 'answPrayer', label: 'Assurance of Answered Prayer', text: `"Until now you have not asked for anything in my name. Ask and you will receive, and your joy may be complete." — John 16:24` },
  { key: 'victory', label: 'Assurance of Victory', text: `"No temptation has overtaken you except what is common to mankind. And God is faithful; He will not let you be tempted beyond what you can bear. But when you are tempted, He will also provide a way out so that you can endure it." — 1 Corinthians 10:13` },
  { key: 'forgiveness', label: 'Assurance of Forgiveness', text: `"If we confess our sins, he is faithful and just and will forgive us our sins and purify us from all unrighteousness." — 1 John 1:9` },
  { key: 'guidance', label: 'Assurance of Guidance', text: `"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to Him, and He will make your paths straight." — Proverbs 3:5–6` },
  { key: 'christTheCenter', label: 'Christ the Center', text: `"Therefore, if anyone is in Christ, the new creation has come: The old has gone, the new is here!" — 2 Corinthians 5:17` },
  { key: 'obedience', label: 'Obedience to Christ', text: `“Therefore, I urge you, brothers and sisters, in view of God’s mercy, to offer your bodies as a living sacrifice, holy and pleasing to God—this is your true and proper worship.” — Romans 12:1` },
];

export default function Dashboard({ navigation }) {
  const [current, setCurrent] = useState(null);
  const { width } = useWindowDimensions();
  const isNarrow = width < 700; // stacks vertically on small screens

  return (
    <View style={styles.root}>
      <Text style={styles.heading}>Verses of Assurance</Text>

      <View style={[styles.content, isNarrow && styles.contentStack]}>
        {/* Left: Buttons */}
        <ScrollView
          style={[styles.left, isNarrow && styles.leftStack]}
          contentContainerStyle={styles.leftContent}
        >
          {VERSES.map(v => (
            <TouchableOpacity
              key={v.key}
              style={[
                styles.button,
                current?.key === v.key && styles.buttonActive
              ]}
              onPress={() => setCurrent(v)}
            >
              <Text style={styles.buttonText}>{v.label}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Right: Verse display */}
        <View style={[styles.right, isNarrow && styles.rightStack]}>
          <ScrollView contentContainerStyle={styles.verseBox}>
            {current ? (
              <Text style={styles.verseText}>{current.text}</Text>
            ) : (
              <Text style={styles.placeholder}>
                Memory verses!{'\n'}
                Tap an assurance on the left to display the verse.{'\n'}
                Study and test your memory.
              </Text>
            )}
          </ScrollView>
        </View>
      </View>

      {/* Bottom "links" from web version */}
      <View style={styles.footer}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.link}>Home</Text>
        </TouchableOpacity>
        <Text style={styles.sep}> | </Text>
        <TouchableOpacity onPress={() => {/* navigation.navigate('Search') if/when you add it */}}>
          <Text style={styles.link}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1, backgroundColor: '#0f0f0f', paddingHorizontal: 16, paddingTop: 16, paddingBottom: 8
  },
  heading: {
    color: '#fff', fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 12
  },
  content: {
    flex: 1, flexDirection: 'row', gap: 12
  },
  contentStack: {
    flexDirection: 'column'
  },
  left: {
    flex: 1
  },
  leftStack: {
    maxHeight: 260
  },
  leftContent: {
    gap: 8, paddingBottom: 12
  },
  button: {
    backgroundColor: '#1c1c1c', borderRadius: 10, paddingVertical: 12, paddingHorizontal: 12, borderWidth: 1, borderColor: '#333'
  },
  buttonActive: {
    borderColor: '#6ee7b7'
  },
  buttonText: {
    color: '#e5e7eb', fontSize: 16
  },
  right: {
    flex: 1.2
  },
  rightStack: {
    minHeight: 160
  },
  verseBox: {
    backgroundColor: '#141414', borderRadius: 12, padding: 16, borderWidth: 1, borderColor: '#2a2a2a', minHeight: 160, justifyContent: 'center'
  },
  verseText: {
    color: '#f9fafb', fontSize: 16, lineHeight: 22
  },
  placeholder: {
    color: '#9ca3af', fontSize: 15, textAlign: 'center'
  },
  footer: {
    marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
  },
  link: {
    color: '#93c5fd', fontSize: 16
  },
  sep: {
    color: '#667085', marginHorizontal: 6
  }
});
