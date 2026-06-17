import { useState, useRef } from "react"
import {
    View, Text, TextInput, TouchableOpacity,
    StyleSheet, ScrollView, Keyboard
} from "react-native"

const CHIP_COLORS = [
    "#5C6BC0", "#26A69A", "#EF5350",
    "#AB47BC", "#FF7043", "#29B6F6"
]

const ChipsInput = () => {
    const [input, setInput] = useState("")
    const [chips, setChips] = useState<string[]>([])
    const [error, setError] = useState("")
    const inputRef = useRef<TextInput>(null)

    const handleAddChip = () => {
        const trimmed = input.trim()
        if (!trimmed) { setError("Please type something first"); return }
        if (chips.includes(trimmed)) { setError("Chip already added"); return }
        setChips(prev => [...prev, trimmed])
        setInput("")
        setError("")

    }

    const handleRemove = (index: number) => {
        setChips(prev => prev.filter((_, i) => i !== index))
    }

    const clearAll = () => {
        setChips([])
        setError("")
    }

    return (
        <ScrollView contentContainerStyle={styles.screen} keyboardShouldPersistTaps="handled">
            <Text style={styles.title}>Chips Input</Text>
            <Text style={styles.subtitle}>Type a tag and press Add</Text>


            <View style={styles.inputRow}>
                <TextInput
                    ref={inputRef}
                    style={styles.input}
                    value={input}
                    placeholder="Enter a tag..."
                    placeholderTextColor="#aaa"
                    onChangeText={(text) => { setInput(text); setError("") }}
                    onSubmitEditing={handleAddChip}
                    returnKeyType="done"
                    blurOnSubmit={false}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddChip} activeOpacity={0.8}>
                    <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
            </View>


            {error ? <Text style={styles.error}>{error}</Text> : null}


            {chips.length > 0 ? (
                <View style={styles.chipsContainer}>
                    {chips.map((chip, index) => (
                        <View
                            key={index}
                            style={[styles.chip, { backgroundColor: CHIP_COLORS[index % CHIP_COLORS.length] }]}
                        >
                            <Text style={styles.chipText}>{chip}</Text>
                            <TouchableOpacity onPress={() => handleRemove(index)} hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}>
                                <Text style={styles.chipClose}>×</Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
            ) : (
                <View style={styles.emptyState}>
                    <Text style={styles.emptyText}>No chips yet. Add one above!</Text>
                </View>
            )}

            {chips.length > 0 && (
                <View style={styles.footer}>
                    <Text style={styles.chipCount}>{chips.length} chip{chips.length > 1 ? "s" : ""}</Text>
                    <TouchableOpacity onPress={clearAll} activeOpacity={0.8}>
                        <Text style={styles.clearText}>Clear all</Text>
                    </TouchableOpacity>
                </View>
            )}
        </ScrollView>
    )
}

export default ChipsInput

const styles = StyleSheet.create({
    screen: {
        flexGrow: 1,
        padding: 24,
        backgroundColor: "#f7f7f9",
    },
    title: {
        fontSize: 28,
        fontWeight: "700",
        color: "#1a1a2e",
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 14,
        color: "#888",
        marginBottom: 20,
    },
    inputRow: {
        flexDirection: "row",
        gap: 10,
        marginBottom: 6,
    },
    input: {
        flex: 1,
        backgroundColor: "#fff",
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 10,
        paddingHorizontal: 14,
        paddingVertical: 12,
        fontSize: 15,
        color: "#1a1a2e",
    },
    addButton: {
        backgroundColor: "#5C6BC0",
        borderRadius: 10,
        paddingHorizontal: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    addButtonText: {
        color: "#fff",
        fontWeight: "600",
        fontSize: 15,
    },
    error: {
        color: "#EF5350",
        fontSize: 13,
        marginBottom: 10,
        marginLeft: 2,
    },
    chipsContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 8,
        marginTop: 16,
    },
    chip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingVertical: 7,
        paddingHorizontal: 12,
        borderRadius: 20,
    },
    chipText: {
        color: "#fff",
        fontSize: 14,
        fontWeight: "500",
    },
    chipClose: {
        color: "#fff",
        fontSize: 18,
        lineHeight: 20,
        fontWeight: "400",
    },
    emptyState: {
        marginTop: 40,
        alignItems: "center",
    },
    emptyText: {
        color: "#bbb",
        fontSize: 15,
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        paddingTop: 16,
        borderTopWidth: 1,
        borderTopColor: "#eee",
    },
    chipCount: {
        fontSize: 13,
        color: "#888",
    },
    clearText: {
        fontSize: 13,
        color: "#EF5350",
        fontWeight: "600",
    },
})