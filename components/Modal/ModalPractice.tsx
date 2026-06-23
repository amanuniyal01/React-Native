import { Modal, Pressable, StyleSheet, Text, View, } from 'react-native'
import React, { useState } from 'react'

const ModalPractice = () => {
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                visible={modalOpen}
                transparent={true}
                onRequestClose={() => setModalOpen(false)}>


                <Pressable
                    style={{ backgroundColor: "rgba(32, 128, 225, 0.46)", flex: 1, alignItems: "center", justifyContent: "center" }}
                    onPress={() => setModalOpen(false)}
                >

                    <Pressable onPress={(e) => e.stopPropagation()}>
                        <View style={[{ backgroundColor: "rgba(229, 0, 0, 0.78)" }, styles.modalContainer]}>
                            <Text>Hello , Modal this Side</Text>
                            <Pressable
                                onPress={() => setModalOpen(false)}
                                style={styles.button}>
                                <Text>Close Modal</Text>
                            </Pressable>
                        </View>
                    </Pressable>
                </Pressable>

            </Modal>
            <View style={styles.centerArea}>
                <Pressable
                    onPress={() => setModalOpen(true)}
                    style={styles.button}>
                    <Text style={styles.btnText}>Show Modal</Text>
                </Pressable>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "red"
    },
    button: {
        backgroundColor: "rgba(0, 88, 230, 0.72)",
        width: 120,
        borderRadius: 9,
        padding: 15,
        alignItems: "center",
    },
    btnText: {
        color: "white",
        fontWeight: "bold"
    },
    centerArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalContainer: {
        padding: 20,
        borderRadius: 15
    }
})
export default ModalPractice