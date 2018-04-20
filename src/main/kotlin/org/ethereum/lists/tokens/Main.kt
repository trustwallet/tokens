package org.ethereum.lists.tokens

import org.kethereum.erc55.withERC55Checksum
import org.kethereum.model.Address
import java.io.File

fun main(args: Array<String>) {

    val imageDir = File("images")
    imageDir.listFiles().forEach {
        if (it.name.startsWith("0x")) {
            val file = File(imageDir, Address(it.name.replace(".png", "")).withERC55Checksum().hex + ".png")
            println("rename" + it.name + " -> " + file.name)
            it.renameTo(file)
        }
    }
}


