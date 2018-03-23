/**
 * @Author: Andree Ray <andreeray>
 * @Date:   2018-03-01T09:37:29+01:00
 * @Email:  andreeray@live.com
 * @Filename: bus.js
 * @Last modified by:   andreeray
 * @Last modified time: 2018-03-01T10:29:31+01:00
 */
function filters(filter, name, checked) {
    if (checked) {
        this[filter].push(name)
    } else {
        let index = this[filter].indexOf(name)
        if (index > -1) {
            this[filter].splice(index, 1)
        }
    }
}

function categoryFilter (post) {
    if ( !this.filterCategories.length ) {
        return true
    } else {
        return this.filterCategories.find(category => {
            return post.category === category
        })
    }
}

function tagsFilter (post) {
    if ( !this.filterTags.length ) {
        return true
    } else {
        let tags = post.tags
        let matched = true
        this.filterTags.forEach(tag => {
            if ( tags.indexOf(tag) === -1 ) {
                matched = false
            }
        })
        return matched
    }
}

export {
    filters,
    categoryFilter,
    tagsFilter
}
