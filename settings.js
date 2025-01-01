const settings = {
    owner: ['6285191985603'], 
    mode: 'self',
    
    mess: {
        success: '✓ Berhasil',
        wait: '⏳ Tunggu sebentar...',
        error: '❌ Gagal!',
        owner: '*🔒 Khusus owner bot!*',
        group: '*👥 Khusus dalam grup!*'
    },

    react: {
        process: '⏳',
        success: '✅',
        error: '❌',
        owner: '🔒'
    },

    isOwner: function(sender) {
        if (!sender) return false
        const number = typeof sender === 'string' 
            ? sender.replace(/[^0-9]/g, '')
            : ''
        return this.owner.includes(number)
    },

    presenceUpdate: async function(sock, from, command) {
        await sock.sendPresenceUpdate('composing', from)
    }
}

module.exports = settings