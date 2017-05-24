class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.id
      if user.is? :admin
        can :manage, :all

      else
        can :create, Album
        # can :read, Album do |album|
        #   album.user.followers.contains? user
        # end
        can [:read, :update, :destroy], Album, user_id: user.id
        can :add_photo, Album, user_id: user.id
        can :user_albums, Album, user_id: user.id


        can [:create, :feed], Photo
        can [:read, :update, :destroy], Photo, album: { user_id: user.id }

        can [:update, :destroy], Comment, user_id: user.id

        can :show, User

        can :follow, User do |following_user|
          user.following.none? { |u| u.id == following_user.id } &&
              user.id != following_user.id
        end
        can :unfollow, User do |following_user|
          user.following.any? { |u| u.id == following_user.id }
          end
        can :show_content, User do |following_user|
          user.following.any? { |u| u.id == following_user.id } || user.id == following_user.id
        end
      end
    end
  end
end
