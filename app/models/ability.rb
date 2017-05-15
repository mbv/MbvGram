class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new
    if user.id
      if user.is? :admin
        can :manage, Album
        can :manage, Photo
        can :manage, Comment

      else
        can :create, Album
        # can :read, Album do |album|
        #   album.user.followers.contains? user
        # end
        can [:read, :update, :destroy], Album, user_id: user.id


        can :create, Photo
        can [:read, :update, :destroy], Photo, photo: { user_id: user.id }

        can [:update, :destroy], Comment, user_id: user.id
      end
    end
  end
end
